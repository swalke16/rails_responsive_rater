(function($) {

  var methods = {
    init : function(options) {
      options = $.extend({}, $.fn.responsiveRater.defaults, options);

      var $item = $(this);

      if (!$item.data('rater-init')) {
        // remove any elements that may be hanging out
        $item.empty();

        if (!$item.hasClass('responsive-rater')) $item.addClass('responsive-rater');

        //get our values, either from the data-* html5 attribute or from the options.
        $item.data('rater-min', $item.data('rater-min') || options.min)
        $item.data('rater-max', $item.data('rater-max') || options.max)
        $item.data('rater-readonly', $item.data('rater-readonly') !== undefined ? $item.data("rater-readonly") : options.readonly)
        $item.data('rater-field', $item.data('rater-field') || options.field)
        $item.data('rater-value', $item.data('rater-value') || options.min)
        $item.data('rater-content', $item.data('rater-content') || options.content)


        var field = $item.data("rater-field");
        if (field) {
          field = $(field);
          $item.data('rater-value', field.hide().val());

          if (field[0].nodeName == 'INPUT') {
            if (field[0].type == 'range' || field[0].type == 'text') { //in browsers not support the range type, it defaults to text

              $item.data('rater-min', parseInt(field.attr('min')) || $item.data('rater-min')); //if we would have done fld[0].min it wouldn't have worked in browsers not supporting the range type.
              $item.data('rater-max', parseInt(field.attr('max')) || $item.data('rater-max'));
            }
          }
          if (field[0].nodeName == 'SELECT' && field[0].options.length > 1) {
            $item.data('rater-min', Number(field[0].options[0].value));
            $item.data('rater-max', Number(field[0].options[field[0].length - 1].value));
          }
        }

        //Create the necessary tags.
        for(var i=0; i<$item.data('rater-max'); i++){
          //TODO: font size needs to scale with # of stars
          $item.append('<span class="rating" style="width: ' + (100 / $item.data("rater-max")) + '%;">' + $item.data("rater-content") + '</span>');
        }

        $item.data('rater-init', true);
      }

      //set the value if we have it.
      if ($item.data('rater-value')) {
        var score = $item.data('rater-value');
        $item.find('.rating:lt(' + score + ')').addClass("rated");
      }

      methods.bindEvents.call(this);
    },

    bindEvents : function() {
      var $item = $(this);

      if (!$item.data('rater-readonly')) {

        if (!$item.data('rater-bound')) {
          $item.on("mouseenter mouseleave", ".rating", function(){
            $(this).toggleClass('hover').prevAll().toggleClass('hover');
          });

          $item.on("click", ".rating", function(e) {
            e.preventDefault();
            var newValue, event;

            if( $(this).hasClass('rated') && $(this).nextAll(".rated").length === 0 ){
              // reseting the value
              newValue = $item.data('rater-min');
              event = "reset";
            }
            else {
              // setting a new value
              newValue = $item.children().index(this) + 1;
              event = "rated";
            }

            methods.value.call($item, newValue);
            $item.trigger(event, [newValue]);
          });

          $item.data("rater-bound", true);
        }
      }
    },

    value : function(value)    {
      if( typeof(value) != "undefined") {
        var $ratings = $(this).find(".rating").removeClass("rated");

        if( value > $(this).data('rater-min') ) {
          $ratings.eq(value - 1).addClass("rated").prevAll().addClass("rated");
        }

        if ($(this).data('rater-field')) {
          $($(this).data('rater-field')).val(value);
        }

        $(this).data("rater-value", value);
      }
      else {
        return $(this).data("rater-value");
      }
    },

    readonly : function(value) {
      if( typeof(value) != "undefined") {
        $(this).data("rater-readonly", value);

        if (value) {
          $(this).unbind();
          $(this).data("rater-bound", false);
        }
        else {
          methods.bindEvents.call(this);
        }
      }
      else {
        return $(this).data("rater-readonly");
      }
    }
  };

  $.fn.responsiveRater = function(methodOrOptions){
    if (this.length == 0) return this;

    var args = arguments;

    return this.each(function() {

      if ( methods[methodOrOptions] ) {
          return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( args, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
          return methods.init.apply( this, args );
      } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.responsiveRater' );
      }

    });
  };

  $.fn.responsiveRater.defaults = { content: "&#9733", min: 0, max: 5, readonly: false };

  $(function () { $('div.responsive-rater').responsiveRater(); });

}( jQuery ));

