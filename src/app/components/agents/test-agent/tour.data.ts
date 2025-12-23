export const STEPS_BUTTONS = {
    back: {
      classes: "back-button",
      secondary: true,
      text: "Back",
      type: "back"
    },
    cancel: {
      classes: "cancel-button",
      secondary: true,
      text: "Exit",
      type: "cancel"
    },
    next: {
      classes: "next-button",
      text: "Next",
      type: "next"
    },
    finish: {
        classes: "finish-button",
        text: "Finish",
        type: "next"
      }
  };
  
  export const defaultStepOptions = {
    classes:'class-1 class-2',
    scrollTo: true,
    cancelIcon: {
      enabled: true
    }
  };

  export const addSteps:any = [
    {
        id: 'chat-toggle',
        title: "Bienvenido a tu chatbt",
        text: 'Este es el botón para abrir y cerrar el widget de chat. Haz clic en él para iniciar una conversación con tu asistente virtual.',
        attachTo: {
            element: '#chat-toggle',
            on:'bottom'
        },
        scrollTo: false,
        buttons: [STEPS_BUTTONS.next],
        
      },
      {
        id: 'btn-volver',
        title: "Presiona volver para regresar",
        text: 'Haz clic en el botón "Volver" para regresar a la página anterior o al panel principal de agentes. Esto te permitirá navegar fácilmente dentro de la aplicación.',
        attachTo: {
            element: '#btn-volver',
            on:'bottom'
        },
        buttons: [STEPS_BUTTONS.finish],
        classes: "custom-class-name-1 custom-class-name-2",
       
      }
  ];
  
  