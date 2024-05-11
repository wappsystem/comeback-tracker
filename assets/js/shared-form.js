//-------------------------------------
//auto fill participant
var load=m.load;
m.load=function(){
    load();
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#People_div__ID').hide();
    }
//--------------------------
    if(m.input!=undefined && m.input.people_record!=undefined){
        console.log(JSON.stringify(m.input))
        //new from child panel
        $("#F__ID input[name=First_Name]").val(m.input.people_record.Data.First_Name);
        $("#F__ID input[name=People_uid]").val(m.input.people_record.UID);
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        //console.log("Modify")
        //console.log(JSON.stringify(m.input.record))
        //console.log(JSON.stringify(m.input.participant_record))
        //modify
    }
    else{
        //new with no parent
        //console.log("new Child No parent")
    }
    //--------------------------
}
m.before_submit=function(data){
    if ($("#F__ID input[name=First_Name]").val()=='' || $("#F__ID input[name=People_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure 'People ID' has a number.") 
        return false;    
    }
}
//-------------------------------------
var status_of_data=function(data){
    /*var N1=0,N2=0;
    for(key in data){
        if(key!="" && key!="First_Name" && key!="People_uid" && key!="sysStatus"){
            console.log(key+' - '+ data[key]);
            N2++;
            if(data[key]=='') N1++;
        }
    }
    var status="#FFCC00";
    if(N1==N2) 		    status='#FF0000';
    else if(N1==0)  	status='#00FF00';
    //If online the questionnaire's required functions is checked and controlled by code. So always mark Status as DONE - Green color
    if($vm.online_questionnaire==1) {
        status='#00FF00';
    }
    return status;*/
}
//-------------------------------------
