	$('body').on('clink::open', function (_event,_options) {
		console.log(_options);
		var cmd = _options;
		if(cmd.configuration.filter_page != 'all' && window.location.href.indexOf('p='+cmd.configuration.filter_page) < 0){
			return;
		}
		if(cmd.configuration.filter_user != 'all' && user_id != cmd.configuration.filter_user){
			return;
		}
		if(cmd.configuration.filter_interface != 'all' && cmd.configuration.filter_interface != 'desktop'){
			return;
		}
		if(isset(cmd.utid) && cmd.utid != utid){
			return;
		}
		if(cmd.configuration.type == 'url'){
			var url = cmd.configuration.link;
		}else if(cmd.configuration.type == 'panel'){
			var panel = cmd.configuration.link.split(":")
			var url = 'index.php?v=d&m='+panel[0]+'&p='+panel[1];
		}else if (cmd.configuration.type == 'dashboard'){ 
			var url = 'index.php?v=d&p='+cmd.configuration.type+'&object_id='+cmd.configuration.link;
		}else if (cmd.configuration.type == 'plan'){ 
			var url = 'index.php?v=d&p=plan&plan_id='+cmd.configuration.link;
		} else {
			var url = 'index.php?v=d&p='+cmd.configuration.type+'&'+cmd.configuration.type+'_id='+cmd.configuration.link;
		}
		switch(cmd.configuration.mode) {
			case 'current':
			window.location.href = url;
			return;
			case 'newTab':
			window.open(url);
			return;
			case 'modal':
			if(cmd.configuration.type != 'url'){
				url += '&fullscreen=1';
			}	
			$('#md_modal').dialog({title: cmd.name});
			$('#md_modal').attr('data-clink',cmd.eqLogic_id);
			if(cmd.configuration.type == 'url' || cmd.configuration.type == 'plan'){
				$('#md_modal').load('index.php?v=d&plugin=clink&modal=iframe.clink&url=' + encodeURIComponent(url)).dialog('open');
			}else{
				$('#md_modal').load(url+'&ajax=1').dialog('open');
			}
			return;
		}
		
	});

	$('body').on('clink::close', function (_event,_options) {
		var cmd = _options;
		if(isset(cmd.utid) && cmd.utid != utid){
			return;
		}
		if($('#md_modal[data-clink='+cmd.eqLogic_id+']').html() != undefined && $('#md_modal[data-clink='+cmd.eqLogic_id+']').dialog( "isOpen" )){
			$('#md_modal[data-clink='+cmd.eqLogic_id+']').dialog( "close" );
			$('#md_modal[data-clink='+cmd.eqLogic_id+']').removeAttr('data-clink');
		}
	});