<app-main>
    <div>
        <article>
            <ul if={ isFirst }>
                <li each={ data }><a href="#first/{ id }">{ title }</a></li>
            </ul>

            <organization if={ isSecond }> </organization>

        </article>
    </div>

    <script>
        var self = this

        self.title = 'Now loading...'
        self.body = ''
        self.isFirst = false
        self.isSecond = false

        self.data = [
            {id: 'apple', title: 'Apple', body: "The world biggest fruit company."},
            {id: 'orange', title: 'Orange', body: "I don't have the word for it..."}
        ]

        var r = route.create()
        r('', home)
        r('home', home)
        r('first', first)
        r('first/*', firstDetail)
        r('second', second)
        r(notfound) // `notfound` would be nicer!


        function notfound() {
            self.update({
                title: "Not found",
                body: "No conent for fut URL",
                isFirst: false,
                isSecond: false
            })
        }
        function home() {
            self.update({
                title: "Home of the great app",
                body: "Timeline or dashboard as you like!",
                isFirst: false,
                isSecond: false
            })
        }
        function first() {
            self.update({
                title: "First feature of your app",
                body: "It could be a list of something for example.",
                isFirst: true,
                isSecond: false
            })
        }
        function firstDetail(id) {
            var selected = self.data.filter(function (d) {
                return d.id == id
            })[0] || {}
            console.log(id);
            self.update({
                title: selected.title,
                body: selected.body,
                isFirst: false,
                isSecond: false
            })
        }
        function second() {
            self.update({
                title: "Second feature of your app",
                body: "It could be a config page for example.",
                isFirst: false,
                isSecond: true
            })
        }
    </script>


    <style>
        :scope {
            align: center;
            width: 100%;
            display: block;
            font-family: sans-serif;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 130px;
            /*margin-left: 50px;
            padding: 1em;*/
            text-align: center;
            color: #666;
        }
        
        ul {
            padding: 10px;
            list-style: none;
        }
        li {
            display: inline-block;
            margin: 5px;
        }
        a {
            display: block;
            background: #f7f7f7;
            text-decoration: none;
            /*width: 150px;
            height: 150px;
            line-height: 150px; */
            color: inherit;
        }
        a:hover {
            background: #eee;
            color: #000;
        }
        
        @media (min-width: 480px) {
            :scope {
                /* margin-right: 200px;*/
                margin-bottom: 0;
            }
        }
       
    </style>

</app-main>
