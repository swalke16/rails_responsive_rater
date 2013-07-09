require "rails_responsive_rater/version"

module RailsResponsiveRater
  # Your code goes here...
end

module Rails
  class Engine < ::Rails::Engine
  end
end

class Railtie < ::Rails::Railtie
  initializer "rails_responsive_rater.action_view" do |app|
    ActiveSupport.on_load :action_view do
      require 'rails_responsive_rater/view_helpers/action_view'
      include RailsResponsiveRater::ViewHelpers::ActionView
    end
  end
end
