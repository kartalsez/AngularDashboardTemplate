import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItemModel } from '../../models/core/menu-item.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CoreService {

  public menuItems: MenuItemModel[] = [
    { id: uuidv4(), name: 'Menü Item 1', url: '/menu-item-1', icon: 'dashboard', isSelected: false },
    { id: uuidv4(), name: 'Menü Item 2', url: '/menu-item-2', icon: 'post_add', isSelected: false },
    { id: uuidv4(), name: 'Menü Item 3', url: '/menu-item-3', icon: 'devices', isSelected: false },
  ];

  public showSpinner$: BehaviorSubject<boolean>;

  constructor() {
    this.showSpinner$ = new BehaviorSubject<boolean>(false);
  }

  public showSpinner(): void {
    this.showSpinner$.next(true);
  }

  public hideSpinner(): void {
    this.showSpinner$.next(false);
  }

  public printFile(url, file): void {
    if (file.type === 'application/pdf') {
      this._printPdf(url, file.name);
    } else if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png') {
      this._printImg(url);
    }
  }

  private _printPdf(url: string, fileName): void {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = fileName;
    link.dispatchEvent(new MouseEvent('click'));
  }

  private _printImg(url: string): void {
    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.9;

    const htmlContent = `<!DOCTYPE html>
            <html>
            <head>
                <title></title>
            </head>
            <body onload="window.focus(); window.print(); window.close();">
            <img src="${url}" width="100%" height="100%" />
            </body>
            </html>`;
    const options = 'toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,width=' + width + ',height=' + height;
    const printWindow = window.open('', 'print', options);
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
  }

}
