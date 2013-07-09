require 'rails'

module RailsResponsiveRater
  module Generators
    class InstallGenerator < ::Rails::Generators::Base

      desc "This generator installs the Rails Responsive Rater plugin"

      def inject_javascript
        begin
          inject_into_file "app/assets/javascripts/application.js", "//= require jquery.responsive-rater\n", :after => "//= require jquery\n"
        rescue
          puts "Could not automatically add jquery.responsive-rater script require into application.js! Please manually\n\n //= require jquery.responsive-rater"
        end
      end

      def inject_stylesheet
        begin
          inject_into_file "app/assets/stylesheets/application.css", "*= require jquery.responsive-rater\n", :after => "/*\n"
        rescue
          puts "Could not automatically add jquery.responsive-rater stylesheet require into application.css! Please manually\n\n *= require jquery.responsive-rater"
        end
      end
    end
  end
end
