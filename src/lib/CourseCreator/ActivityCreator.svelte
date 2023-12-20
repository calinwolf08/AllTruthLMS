<script lang="ts">
	import { ActivityType } from "$lib/Models/Course";


</script>
<div class="flex">
    <label class="flex items-center space-x-2">
        <input class="radio" type="radio" checked name="radio-direct" value="1" />
        <p>{ActivityType.SCORM}</p>
    </label>
</div>
<div class="flex">
<label class="flex items-center space-x-2">
    <input class="radio" type="radio" name="radio-direct" value="2" />
    <p>{ActivityType.VIDEO}</p>
</label>
</div>
