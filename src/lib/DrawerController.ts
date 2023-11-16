
import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';

export class DrawerController {
    private drawerStore: DrawerStore;

    constructor(drawerStore : DrawerStore) {
        this.drawerStore = drawerStore;
    }
    
    openDrawer(settings: DrawerSettings) : void {
        this.drawerStore.open(settings);
    }; 
}