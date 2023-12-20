
import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

export enum DrawerId {
    CourseContents = "CourseContents",
    AddSection = "AddSection"
}

export class DrawerController {
    private drawerStore: DrawerStore;

    constructor(drawerStore : DrawerStore) {
        this.drawerStore = drawerStore;
    }
    
    openDrawer(settings: DrawerSettings) : void {
        this.drawerStore.open(settings);
    }; 

    closeDrawer() : void {
        this.drawerStore.close();
    }
}