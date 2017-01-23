
riot.tag2('organization', '<div class="panel panel-primary"> <div class="panel-heading"> <h3 class="panel-title">Organization</h3> </div> <div class="left-panel"> <search></search> </div> <div class="right-panel"> <form onsubmit="{submit}" role="form" class="form-horizontal"> <div class="form-group"> <label class="col-sm-2 control-label">Name</label> <input type="text" placeholder="first name" class="form-control" ref="name"> </div> <div class="form-group"> <label class="col-sm-2 control-label">PI</label> <input type="text" placeholder="PI" class="form-control" ref="pi"> </div> <div class="form-group"> <label class="col-sm-2 control-label">CF</label> <input type="text" placeholder="CF" class="form-control" ref="cf"> <div class="form-group"> <label class="col-sm-2 control-label">eMail</label> <input type="text" placeholder="eMail" class="form-control" ref="email"> </div> </div> <button>Submit </button> </form> </div> </div>', 'organization h3,[data-is="organization"] h3{ font-size: 14px; } organization .panel,[data-is="organization"] .panel{ margin: 5px; display: block; } organization .left-panel,[data-is="organization"] .left-panel{ margin: 5px; width: 45%; top: 0; right: auto; bottom: auto; left: 0; vertical-align: top; float: left; background: ghostwhite; } organization .right-panel,[data-is="organization"] .right-panel{ margin: 5px; width: 45%; top: 0; right: 0; bottom: auto; left: auto; vertical-align: top; float: left; background: ghostwhite; } organization .button-bar,[data-is="organization"] .button-bar{ right: 0; left: 0; bottom: 0; border-top: 1px solid #ddd; background: white; } organization .button-bar > button,[data-is="organization"] .button-bar > button{ float: right; margin: 20px; } organization li.list-group-item,[data-is="organization"] li.list-group-item{ list-style: none; } organization li.list-group-item > a,[data-is="organization"] li.list-group-item > a{ text-decoration: none; } organization li.list-group-item.active > a,[data-is="organization"] li.list-group-item.active > a{ color: white; }', '', function(opts) {
        this.items = []

        riot.mount('search');

        this.submit = function(e) {
            e.preventDefault()
            console.log("Nome: ", this.refs.name.value)
            var data = JSON.stringify({"name": "name.value",
                "pi": "pi.value",
                "cf": "cf.value",
                "org_email": "email.value",
            });
            console.log(data);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText);
                }
            });

            xhr.open("POST", "http://localhost:3000/api/organizations");

            xhr.setRequestHeader("content-type", "application/json");

            xhr.send(data);

        }.bind(this)
});
