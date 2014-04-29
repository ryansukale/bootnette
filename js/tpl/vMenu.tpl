<div class="vMenu">
  <ul class="menu-items list-unstyled">
  	{{#each menuItems}}
    	<li class="item">
    		<a href="{{url}}" class="{{#if isActive}}active{{/if}}">
    			{{title}}
    		</a>
    	</li>
    {{/each}}
  </ul>
</div>