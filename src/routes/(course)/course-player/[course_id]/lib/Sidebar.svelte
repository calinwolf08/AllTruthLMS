<script lang='ts'>
	import { Heading, A, Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarWrapper } from 'flowbite-svelte';
	import { currentCourse } from './stores';
    import type { Activity } from '$lib/Models/Course'; 
    import { getActivity } from '$lib/context';

    const activity = getActivity();

    let selectedSection = 0;
	let selectedActivity = 0;

	function changeActivity(activity: Activity, sectionIndex: number, activityIndex: number) : void {
		$activity = activity;
		selectedSection = sectionIndex;
		selectedActivity = activityIndex
	}
</script>

<Sidebar class="bg-white w-0 lg:w-1/4 lg:min-w-[24rem] h-full drop-shadow-md">
	<SidebarWrapper class="bg-white">
		<SidebarGroup>
            <A href="/" class="mb-10">Go back home</A>
			<Heading tag='h3' class='mb-6'>{$currentCourse.name}</Heading>
            {#each $currentCourse.sections as section, sectionIdx }
                {#if section.activities.length > 0}
                    <SidebarDropdownWrapper isOpen={true} label="{section.name}" class="bg-dark-blue-500 hover:bg-dark-blue-400 text-white">
                        {#each section.activities as activity, activityIdx }
                            <SidebarDropdownItem label="{activity.name}" active="{selectedSection==sectionIdx && selectedActivity==activityIdx}" on:click={() => {changeActivity(activity, sectionIdx, activityIdx)}} 
                                class="hover:bg-slate-300" 
                                activeClass="flex items-center p-2 ps-11 text-base font-normal text-white bg-primary-500 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-primary-300"/>
                        {/each}
                    </SidebarDropdownWrapper>
                {/if}
            {/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>