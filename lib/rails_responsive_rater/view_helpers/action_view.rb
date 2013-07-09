module RailsResponsiveRater
  module ViewHelpers
    module ActionView
      def responsive_rater_tag(options = {})
        tag_options = {:class => "responsive-rater"}
        options.each do |name, value|
          tag_options["data-rater-#{name}"] = value
        end

        content_tag(:div, "", tag_options)
      end
    end
  end
end
