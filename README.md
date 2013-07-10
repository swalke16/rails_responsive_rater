# Rails Responsive Rater

A simple client-side rating system packaged up as a gem for Rails projects.

This project was created because I was not happy with any of the existing rating plugins
I found for Rails. Mainly because they all relied on images (usually stars) for the rating
display. I think a better approach is to make use of unicode symbols and CSS so that the
rating display can easily be made responsive without the associated hassles of using images.

### What It Does

  * Provides a responsive display of a rating (default stars) that is easily styleable.
  * Provides a client-side API for interacting with the rating.
  * Provides a Rails view helper for easily creating the client-side rating display.

### What It Does *NOT* Do

  * Touch your Rails models, controllers, routes, etc... in any way.
  * Interact with your Rails app via AJAX in any way.
  * Work in older browsers...?  This has only been tested in newer browsers. If you want it to work in older browsers feel free to fork and submit a pull request.


## Installation

Add this line to your application's Gemfile:

    gem 'rails_responsive_rater'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install rails_responsive_rater


Once the gem has been installed you can attempt to have it add the necessary require statements to your application.js and application.css for you:

    $ rails generate rails_responsive_rater:install

If the generator does not work then manually require the JS and CSS assets in your manifest files by:

    //= require jquery.responsive-rater

    *= require jquery.responsive-rater

## Usage

In your view you can use the view helper to easily create a rater with the default options:

    <%= responsive_rater_tag() %>

### Options

The helper can take a hash of options to override the defaults and customize the behavior:

  * field     - (null) a jQuery selector that identifies a text, select, or number HTML form element that will be used to get the initial rating value from. The value will be kept in sync with the displayed rating as the user changes it.
  * min       - (0) minimum rating value.
  * max       - (5) maximum rating value, also corresponds to how many rating items to display.
  * readonly  - (false) control whether the user can change the displayed rating.
  * value     - (min) the value of the rating to start with.
  * content   - (&#9733;) the content to use for the rating display. This can be any valid HTML. Let your imagination go wild!

### Client-side API

This is written as a jQuery plugin and its API functions as other jQuery plugins do.

    // construct a new rater inside a container, and provide some options
    // available options are the same described above for the view helper, passed as an object literal
    $(".rating-container").responsiveRater(options)

    // get / set the value of the rater
    $(".rating-container").responsiveRater("value")
    $(".rating-container").responsiveRater("value", newValue)

    // get / set readonly mode
    $(".rating-container").responsiveRater("readonly")
    $(".rating-container").responsiveRater("readonly", newValue)

    // listen to an event when the rating changes
    $(".rating-container").on("rated", function(value){
      // do something with new value here
    });

    // listen to an event when the rating is reset
    // reset occurs when a user clicks the highest previously rated value, e.g. clicking the 3rd star after giving a rating of 3
    $(".rating-container").on("reset", function(value){
      // do something with new value here
    });


## Credits
  [Derek Briggs](https://github.com/derekbriggs) - for the idea to go the responsive route in the first place, making the styles work, creating an example page, and generally being awesome.

  [rails-rateit](https://github.com/ouvrages/rails-rateit) - for the initial idea and some code for working around edge cases.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
