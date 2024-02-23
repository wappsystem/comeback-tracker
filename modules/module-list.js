(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"products-data"] ={url:H+"/form-grid/products-data.html",Table:"products-comeback",form_module:"products-form",child_stock:"stock-form",child_process:"process-form",task_name:"Products",};                   
    m[p+"products-form"] ={url:H+"/form-grid/products-form.html",Table:"products-comeback",client_table:"supplier-comeback",task_name:"Products"};
    m[p+"stock-data"] ={url:H+"/form-grid/stock-data.html",Table:"stock-comeback",form_module:"stock-form",task_name:"Stock Transaction"};                   
    m[p+"stock-form"] ={url:H+"/form-grid/stock-form.html",Table:"stock-comeback",client_table:"products-comeback",stock_level_table:"stock-level-comeback",measurement_table:"measurement-comeback",task_name:"Stock Transaction"};
    m[p+"process-data"] ={url:H+"/form-grid/process-data.html",Table:"process-comeback",form_module:"process-form",task_name:"Process"};                   
    m[p+"process-form"] ={url:H+"/form-grid/process-form.html",Table:"process-comeback",client_table:"products-comeback",task_name:"Process"};
    m[p+"stock-level-data"] ={url:H+"/form-grid/stock-level-data.html",Table:"products-comeback",Table2:"stock-level-comeback",task_name:"Stock Level"};                   

    m[p+"formula-data"] ={url:H+"/form-grid/formula-data.html",Table:"formula-comeback",form_module:"formula-form",task_name:"Formula"};                   
    m[p+"formula-form"] ={url:H+"/form-grid/formula-form.html",Table:"formula-comeback",client_table:"products-comeback",client2_table:"people-comeback",measurement_table2:"measurement-comeback",task_name:"Formula"};
    m[p+"outcomes-data"] ={url:H+"/form-grid/outcomes-data.html",Table:"outcomes-comeback",form_module:"outcomes-form",task_name:"Outcomes"};                   
    m[p+"outcomes-form"] ={url:H+"/form-grid/outcomes-form.html",Table:"outcomes-comeback",task_name:"Outcomes"};
    m[p+"scanned-data"] ={url:H+"/form-grid/scanned-data.html",Table:"scanned-comeback",form_module:"scanned-form",task_name:"Upload"};                   
    m[p+"scanned-form"] ={url:H+"/form-grid/scanned-form.html",Table:"scanned-comeback",Table2:"formula-comeback",Table3:"people-comeback",task_name:"Scanner input"};

    m[p+"panel-setup"]=    	        {url:H+"/panels/setup.html"};
    m[p+"supplier-data"] ={url:H+"/form-grid/supplier-data.html",Table:"supplier-comeback",form_module:"supplier-form",task_name:"Supplier"};                   
    m[p+"supplier-form"] ={url:H+"/form-grid/supplier-form.html",Table:"supplier-comeback",Table2:"formula-comeback",Table3:"people-comeback",task_name:"Supplier"};
    m[p+"people-data"] ={url:H+"/form-grid/people-data.html",Table:"people-comeback",form_module:"people-form",task_name:"People"};                   
    m[p+"people-form"] ={url:H+"/form-grid/people-form.html",Table:"people-comeback",task_name:"People"};
    m[p+"measurement-data"] ={url:H+"/form-grid/measurement-data.html",Table:"measurement-comeback",form_module:"measurement-form",task_name:"Measurement"};                   
    m[p+"measurement-form"] ={url:H+"/form-grid/measurement-form.html",Table:"measurement-comeback",task_name:"Measurement"};

    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1};
    m[p+"panel-child"]=              {url:H+"/panels/child.html"};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
            $vm.module_list[p].Table2="demo-"+$vm.module_list[p].Table2;
            $vm.module_list[p].client_table="demo-"+$vm.module_list[p].client_table;
            $vm.module_list[p].client2_table="demo-"+$vm.module_list[p].client2_table;
            $vm.module_list[p].stock_level_table="demo-"+$vm.module_list[p].stock_level_table;
            $vm.module_list[p].measurement_table="demo-"+$vm.module_list[p].measurement_table;
            $vm.module_list[p].measurement_table2="demo-"+$vm.module_list[p].measurement_table2;
        }
    //}

})();
