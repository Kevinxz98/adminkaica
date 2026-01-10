import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../shared/services/user-service.service';
import { SpkProfileSkeleton } from '../../../@spk/reusable-pages/spk-profile-skeleton/spk-profile-skeleton';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
  providers: [],
  standalone: true,
  imports: [
    SharedModule,
    NgbNavModule,
    NgSelectModule,
    RouterModule,
    SpkProfileSkeleton,
    RouterLink
  ],
})
export class Profile implements OnInit {
  activeNav = [1];
  isLoading = false;
  userData: any;
  profileData: any;
  profile_image = '';

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.isLoading = true;
    this.userService.getProfile().subscribe({
      next: (user) => {
        if (user.success) {
          this.userData = user.data.user;
          this.profileData = user.data.profile;
          this.profile_image = this.profileData.profile_image
            ? `https://backend.kaica.co/public/storage/${this.profileData.profile_image}`
            : 'assets/images/faces/9.jpg';
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching agent data:', error);
      },

    });
  }
  public type: string = 'component';

  public disabled: boolean = false;


}
