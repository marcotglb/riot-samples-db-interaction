riot.tag2('app-main', '<div> <article> <ul if="{isFirst}"> <li each="{data}"><a href="#first/{id}">{title}</a></li> </ul> <organization if="{isSecond}"> </organization> </article> </div>', 'app-main,[data-is="app-main"]{ align: center; width: 100%; display: block; font-family: sans-serif; margin-right: auto; margin-left: auto; margin-bottom: 130px; text-align: center; color: #666; } app-main ul,[data-is="app-main"] ul{ padding: 10px; list-style: none; } app-main li,[data-is="app-main"] li{ display: inline-block; margin: 5px; } app-main a,[data-is="app-main"] a{ display: block; background: #f7f7f7; text-decoration: none; color: inherit; } app-main a:hover,[data-is="app-main"] a:hover{ background: #eee; color: #000; } @media (min-width: 480px) { app-main,[data-is="app-main"]{ margin-bottom: 0; } }', '', function(opts) {
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
        r(notfound)

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
});
