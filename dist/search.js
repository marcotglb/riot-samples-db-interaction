riot.tag2('search', '<form onsubmit="{search}"> <label> <span> Search a movie </span> <input oninput="{search}" onchange="{search}" ref="s" placeholder="28 Days Later.." type="search"> </label> <form> <div if="{isLoading}" class="loader"> <img src="puff.svg"> </div> <p class="error" if="{error}">{error}</p> <div if="{results.length}"> <ul> <li each="{results}"> <a href="http://www.imdb.com/title/{imdbID}" target="_blank">{Title}</a> <span>{Year}</span> </li> </ul> </div>', 'search,[data-is="search"]{ } search .loader,[data-is="search"] .loader{ } search .loader,[data-is="search"] .loader{ margin: 6rem 0 0; } search .error,[data-is="search"] .error{ color: #FFFAAA; margin: 1rem 0; } search label,[data-is="search"] label{ align-items: center; display: flex; flex-direction: column; font-size: 1.6rem; } search label span,[data-is="search"] label span{ text-shadow: 1px 1px 2px rgba(0,0,0,0.8); } search input,[data-is="search"] input{ margin: 1rem 0 0; font-size: 1.6rem; font-weight: 300; padding: 0.8rem 1rem; border: 1px solid rgba(255, 255, 255, 0.05); background: rgba(255, 255, 255, 0.05); transition: all 0.3s; box-shadow: 1px 1px 2px rgba(0,0,0, 0.3); -moz-appearance:none; -webkit-appearance:none; outline: none; } search input:focus,[data-is="search"] input:focus{ border: 1px solid transparent; background: rgba(255, 255, 255, 0.08); } search ul,[data-is="search"] ul{ padding: 0; margin: 1rem 0 2rem; } search ul li,[data-is="search"] ul li{ padding: 0.6rem 1rem; margin: 1px 0; line-height: 1.4rem; display: flex; justify-content: space-between; align-items: center; align-content: space-between; box-sizing: border-box; } search ul li:hover,[data-is="search"] ul li:hover,search ul li:active,[data-is="search"] ul li:active,search ul li:focus,[data-is="search"] ul li:focus{ background: rgba(255, 255, 255, 0.1); } search ul li a,[data-is="search"] ul li a{ margin: 0 0.6rem 0 0; text-decoration: none; } search ul li span,[data-is="search"] ul li span{ opacity: 0.5; }', '', function(opts) {

  var lastSearch = null,

    reset = function() {
      this.results = []
      this.error = false
    }.bind(this)

    doApiRequest = debounce(function(search) {
      fetch('http://www.omdbapi.com/?s=' + search)
        .then(function(res) {
          return res.json()
        })
        .then(function(data) {
          reset()

          if (this.refs.s.value) {
            if (data.Search) this.results = data.Search
            else this.error = data.Error
          }

          this.isLoading = false
          this.update()
        }.bind(this))
    }.bind(this), 300, false)

  this.results = []

  this.search = function(e) {

    var search = this.refs.s.value

    if (!search) {
      reset()
    } else if (lastSearch != search)  {
      reset()
      this.isLoading = true
      doApiRequest(search)
    }

    lastSearch = search
  }.bind(this)

});