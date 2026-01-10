import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  inject,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { Menu, NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { SwitcherService } from '../../services/switcher.service';
import { Switcher } from '../switcher/switcher';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppStateService } from '../../services/app-state.service';
import { NotificationSidebar } from '../notification-sidebar/notification-sidebar';
import { Auth } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { UserStateService } from '../../services/user-state.service';

interface Item {
  id: number;
  name: string;
  type: string;
  title: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  providers: [{ provide: ToastrService, useClass: ToastrService }],
  styleUrls: ['./header.scss'],
  standalone: false,
})
export class Header implements OnInit {
  cartItemCount: number = 5;
  notificationCount: number = 1;
  public isCollapsed = true;
  collapse: any;
  closeResult = '';
  themeType: string | undefined;
  userName = '';
  firstLetter = '';
  userMail = '';
  userData: any;
  profileData: any;
  isLoading = false;
  profile_image: string = 'assets/images/media/icons/user-icon.png';

  selectedItem: string | null = 'selectedItem';
  isOpen: boolean = false;

  private subscriptions = new Subscription();

  constructor(
    private appStateService: AppStateService,
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
    private elementRef: ElementRef,
    public renderer: Renderer2,
    public modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: Auth,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private userStateService: UserStateService,
  ) {
    this.localStorageBackUp();
    
  }

  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasService1 = inject(NgbOffcanvas);

  ngOnInit(): void {
    
    const storedSelectedItem = localStorage.getItem('selectedItem');
    // this.updateSelectedItem();
    // If there's no selected item stored, set a default one
    if (!storedSelectedItem) {
      this.selectedItem = 'Sales Dashboard'; // You can set any default item here
      localStorage.setItem('selectedItem', this.selectedItem);
    } else {
      this.selectedItem = storedSelectedItem;
    }
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
    // To clear and close the search field by clicking on body
    document.querySelector('.main-content')?.addEventListener('click', () => {
      this.clearSearch();
    });
    this.text = '';
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedItem();
        this.closeMenuOnNavigation();
      });


       // 1. Suscribirse a cambios en la imagen de perfil
    this.subscriptions.add(
      this.userStateService.profileImage$.subscribe(imageUrl => {
        if (imageUrl) {
          this.profile_image = imageUrl;
        } else {
          this.profile_image = 'assets/images/media/icons/user-icon.png';
        }
        this.cdr.detectChanges();
      })
    );
    
    // 2. Suscribirse a cambios en los datos del perfil
    this.subscriptions.add(
      this.userStateService.userProfile$.subscribe(profile => {
        if (profile) {
          this.updateProfileData(profile);
        }
      })
    );

    this.loadProfile();

  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  loadProfile() {
    this.isLoading = true;
    this.userService.getProfile().subscribe({
      next: (user) => {
        if (user.success) {
          this.userData = user.data.user;
          this.profileData = user.data.profile;
          this.userName = user.data.user.name; 
          this.userMail = user.data.user.email; 
          this.firstLetter = this.userName.charAt(0).toUpperCase();

         if (this.profileData.profile_image) {
            const fullImageUrl = `https://backend.kaica.co/public/storage/${this.profileData.profile_image}`;
            this.profile_image = fullImageUrl;
            
            // Actualizar el estado global
            this.userStateService.updateProfileImage(fullImageUrl);
          } else {
            // Usar imagen por defecto
            this.profile_image = 'assets/images/media/icons/user-icon.png';
            this.userStateService.updateProfileImage(null);
          }
          
          // Actualizar datos completos en el estado
          this.userStateService.updateUserProfile(this.profileData);
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching agent data:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      },

    });
  }
  
  private updateProfileData(profile: any): void {
    this.profileData = profile;
    
    // Actualizar imagen si existe en el perfil
    if (profile?.profile_image) {
      const fullImageUrl = `https://backend.kaica.co/public/storage/${profile.profile_image}`;
      if (this.profile_image !== fullImageUrl) {
        this.profile_image = fullImageUrl;
      }
    }
    
    this.cdr.detectChanges();
  }
  
  // Método para manejar cuando se cambia la imagen desde otro componente
  updateProfileImage(imageUrl: string | null): void {
    if (imageUrl) {
      this.profile_image = imageUrl;
    } else {
      this.profile_image = 'assets/images/media/icons/user-icon.png';
    }
    this.cdr.detectChanges();
  }

  closeDropdown() {
    this.isOpen = false;
  }

  

  handleItemClick(title: string) {
    this.selectedItem = title;
    this.isOpen = false;
    localStorage.setItem('selectedItem', title);
  }


  toggleSidebarNotification() {
    this.offcanvasService1.open(NotificationSidebar, {
      position: 'end',
      scroll: true,
      panelClass: 'header-notification-width',
    });
  }
  // Addding sticky-pin
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = document.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    sections.forEach((ele, i) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = document.querySelector('#' + val);

      // Add a null check here before accessing properties of refElement
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector('.nav-scroll')?.classList.remove('active');
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      }
    });
  }
  openModal(content: any) {
    this.modalService.open(content);
  }
  openSearch(search: any) {
    // this.modalService.open(search);
  }

  private closeMenuOnNavigation(): void {
    const html = document.documentElement;

    if (window.innerWidth <= 992) {
      html.setAttribute('data-toggled', 'close');
    } else {
      html.removeAttribute('data-toggled');
    }
  }

  toggleSidebar() {
    let html = document.querySelector('html')!;

    // Check the window width
    if (window.innerWidth <= 992) {
      let dataToggled = html.getAttribute('data-toggled');

      if (dataToggled == 'open') {
        html.setAttribute('data-toggled', 'close');
      } else {
        html.setAttribute('data-toggled', 'open');
      }
    } else {
      let menuNavLayoutType = html.getAttribute('data-nav-style');
      let verticalStyleType = html.getAttribute('data-vertical-style');

      if (menuNavLayoutType) {
        let dataToggled = html.getAttribute('data-toggled');
        if (dataToggled) {
          html.removeAttribute('data-toggled');
        } else {
          html.setAttribute('data-toggled', menuNavLayoutType + '-closed');
        }
      } else if (verticalStyleType) {
        let dataToggled = html.getAttribute('data-toggled');

        if (verticalStyleType == 'doublemenu') {
          if (
            html.getAttribute('data-toggled') === 'double-menu-open' &&
            document.querySelector('.double-menu-active')
          ) {
            html.setAttribute('data-toggled', 'double-menu-close');
          } else {
            if (document.querySelector('.double-menu-active')) {
              html.setAttribute('data-toggled', 'double-menu-open');
            }
          }
        } else if (dataToggled) {
          html.removeAttribute('data-toggled');
        } else {
          switch (verticalStyleType) {
            case 'closed':
              html.setAttribute('data-toggled', 'close-menu-close');
              break;
            case 'icontext':
              html.setAttribute('data-toggled', 'icon-text-close');
              break;
            case 'overlay':
              html.setAttribute('data-toggled', 'icon-overlay-close');
              break;
            case 'detached':
              html.setAttribute('data-toggled', 'detached-close');
              break;
            default:
          }
        }
      }
    }
  }

  localStorageBackUp() {
    let styleId = document.querySelector('#style');

    let html = document.querySelector('html');
    //Theme Color Mode:
    if (localStorage.getItem('vyzorHeader') == 'dark') {
      if (localStorage.getItem('vyzordarktheme')) {
        const type: any = localStorage.getItem('vyzordarktheme');
        html?.setAttribute('data-theme-mode', type);
        html?.setAttribute('data-header-styles', type);
        html?.setAttribute('data-menu-styles', type);
      }
      if (localStorage.getItem('vyzordarktheme') == 'light') {
        const type: any = localStorage.getItem('vyzordarktheme');
        html?.setAttribute('data-theme-mode', type);
        html?.setAttribute('data-header-styles', type);
        html?.setAttribute('data-menu-styles', 'transparent');
      }
    }
  }
  isCartEmpty: boolean = false;
  isNotifyEmpty: boolean = false;

  removeNotify(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
    console.log(this.notificationCount);
  }

  // Search
  public menuItems!: Menu[];
  public items!: Menu[];
  public text!: string;
  public SearchResultEmpty: boolean = false;

  

  private updateSelectedItem() {
    const dashboard = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
    this.selectedItem = dashboard
      ? dashboard.charAt(0).toUpperCase() + dashboard.slice(1) + ' Dashboard'
      : this.selectedItem;
  }
  ngOnDestroy(): void {
    const windowObject: any = window;
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;

    window.addEventListener('resize', () => {
      if (localStorage.getItem('vyzorverticalstyles') != 'icon-text-close') {
        if (windowObject.innerWidth <= '991') {
          html?.setAttribute('data-toggled', 'open');
        } else {
          if (!(localStorage.getItem('vyzorverticalstyles') == 'doublemenu')) {
            html?.removeAttribute('data-toggled');
          }
        }
      } else {
        document
          .querySelector('html')
          ?.setAttribute('data-toggled', 'icon-text-close');
      }
    });
  }
  Search(searchText: string) {
    if (!searchText) return (this.menuItems = []);
    // items array which stores the elements
    const items: Item[] = [];
    // Converting the text to lower case by using toLowerCase() and trim() used to remove the spaces from starting and ending
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems: Menu) => {
      // checking whether menuItems having title property, if there was no title property it will return
      if (!menuItems?.title) return false;
      //  checking wheteher menuitems type is text or string and checking the titles of menuitems
      if (
        menuItems.type === 'link' &&
        menuItems.title.toLowerCase().includes(searchText)
      ) {
        // Converting the menuitems title to lowercase and checking whether title is starting with same text of searchText
        if (menuItems.title.toLowerCase().startsWith(searchText)) {
          // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(menuItems))
          // If both are matching then the code is pushed to items array
          items.push(menuItems as Item);
        }
      }
      //  checking whether the menuItems having children property or not if there was no children the return
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems: Menu) => {
        if (!subItems?.title) return false;
        if (
          subItems.type === 'link' &&
          subItems.title.toLowerCase().includes(searchText)
        ) {
          if (subItems.title.toLowerCase().startsWith(searchText)) {
            // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subItems))
            items.push(subItems as Item);
          }
        }
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems: Menu) => {
          if (subSubItems.title?.toLowerCase().includes(searchText)) {
            if (subSubItems.title.toLowerCase().startsWith(searchText)) {
              // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subSubItems))
              items.push(subSubItems as Item);
            }
          }
        });
        return true;
      });
      return (this.menuItems = items);
    });
    // Used to show the No search result found box if the length of the items is 0
    if (!items.length) {
      this.SearchResultEmpty = true;
    } else {
      this.SearchResultEmpty = false;
    }
    return true;
  }
  SearchModal(SearchModal: any) {
    this.modalService.open(SearchModal);
  }

  //  Used to clear previous search result
  clearSearch() {
    const headerSearch = document.querySelector('.header-search');
    if (headerSearch) {
      headerSearch.classList.remove('searchdrop');
    }
    this.text = '';
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;
  }
  SearchHeader() {
    document.querySelector('.header-search')?.classList.toggle('searchdrop');
  }
  isInputFocused: boolean = false;

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }

  // toggleSidebarNotification() {
  //   this.sidebarRightservice.emitSidebarNotifyChange(true);
  // }

  handleCardClick(event: MouseEvent) {
    event.stopPropagation();
  }

  logout() {
    this.authService.logout().subscribe({
    next: (res) => {
      this.toastr.success('Sesión Cerrada', 'Kaica', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      localStorage.removeItem('token'); // por si acaso
      // Redirigir al login
      this.router.navigate(['auth/login']);
    },
    error: (err) => {
      console.error('❌ Error al cerrar sesión:', err);
      this.toastr.error('Error al cerrar sesión', 'Kaica');
    },
  });
  }
}
