
import type { DrawerStore } from '@skeletonlabs/skeleton';

export class DrawerController {
    private drawerStore: DrawerStore;

    constructor(drawerStore : DrawerStore) {
        this.drawerStore = drawerStore;
    }
    
    openDrawer() : void {
        this.drawerStore.open();
    };
}