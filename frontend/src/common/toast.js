import { React, Component } from "react";
import { ToastComponent } from '@syncfusion/ej2-react-notifications';

class Toaster extends Component {
    constructor() {
        super();
        this.position = { X: 'Right', Y: 'Bottom' };
        this.toasts = [
            { title: 'Warning !', cssClass: 'e-toast-warning' },
            { title: 'Success !', cssClass: 'e-toast-success' },
            { title: 'Error !', cssClass: 'e-toast-danger' },
            { title: 'Information !', cssClass: 'e-toast-info' }
        ];
    }

    showToast = (id, content) => {
        this.toasts[id].content = content;
        this.toastInstance.show(this.toasts[id]);
    }

    render() {
        return (
            <ToastComponent ref={toast => this.toastInstance = toast} position={this.position} />
        );
    }
};

export default Toaster;