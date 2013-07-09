require 'rails'

module RailsResponsiveRater
  module Generators
    class InstallGenerator < ::Rails::Generators::Base

      desc "This generator installs the Rails Responsive Rater plugin"

      def inject_javascript
        inject_into_file "app/assets/javascripts/application.js", "//= require rails_responsive_rater\n", :after => "//= require jquery\n"
      end

      def inject_stylesheet
        inject_into_file "app/assets/stylesheets/application.css", "*= require rails_responsive_rater\n", :after => "/*\n"
      end
    end
  end
end
