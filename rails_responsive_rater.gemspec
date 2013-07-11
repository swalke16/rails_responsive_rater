# -*- encoding: utf-8 -*-
require File.expand_path('../lib/rails_responsive_rater/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Scott Walker", "Derek Briggs"]
  gem.email         = ["swalke16@gmail.com", "derek.briggs@me.com"]
  gem.description   = %q{This project was created because I was not happy with any of the existing rating plugins I found for Rails. Mainly because they all relied on images (usually stars) for the rating display. I think a better approach is to make use of unicode symbols and CSS so that the rating display can easily be made responsive without the associated hassles of using images.}
  gem.summary       = %q{A simple, responsive, client-side rating system Rails.}
  gem.homepage      = "https://github.com/swalke16/rails_responsive_rater"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "rails_responsive_rater"
  gem.require_paths = ["lib"]
  gem.version       = RailsResponsiveRater::VERSION
  gem.license       = "MIT"
end
