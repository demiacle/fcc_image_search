# Image Search Api

#### Search for images. You may use the variable page to query different pages. Limited to 10 results per query

### Example usage:

`https://tall-fold.glitch.me/search/<span>something</span>`  
`https://tall-fold.glitch.me/search/<span>somethingelse?page=6</span>`

### Example output:

<pre>{  
   "search":"api",
   "page":1,
   "items":[  
      {  
         "title":"The infinite strength of the direct-to-API approach | InPlayer",
         "imgURL":"http://inplayer.com/wp-content/uploads/2015/08/api-a397cc184c5622fb5130af1b7baf149d.png",
         "pageURL":"https://inplayer.com/the-infinite-strength-of-the-direct-to-api-approach/",
         "thumbnailURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObAs0RRK9z2JeZJqIBe6fOdzpXOvN0zp3zyLvM3UXHvAP4IbzBhdHIH87"
      },
      {  
         "title":"API: The Next Buzz | Kunal Shah | Pulse | LinkedIn",
         "imgURL":"https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAhmAAAAJGY2NmM2ODYxLTZlMjEtNDQwZi05NzhjLWU3NDU4NjNiMDMyOA.png",
         "pageURL":"https://www.linkedin.com/pulse/api-next-buzz-kunal-shah",
         "thumbnailURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsn4y_Ozf7VZUOzQSiu5mS4M0N-vYuOJc5OACHkscSD4LomNCmxUWLAUJ"
      },
     {
         "and so on" : '...'
     }
   ]
}
</pre>

#### You may also view the latest 20 searches.

### Example usage:

`https://tall-fold.glitch.me/latest`

### Example output:

<pre>[  
   {  
      "search":"other",
      "when":"Thu Nov 30 2017 19:02:44 GMT+0000 (UTC)"
   },
   {  
      "search":"searches",
      "when":"Thu Nov 30 2017 19:01:52 GMT+0000 (UTC)"
   },
   {  
      "search":"cool!",
      "when":"Thu Nov 30 2017 19:01:52 GMT+0000 (UTC)"
   }
]
        </pre>

</div>