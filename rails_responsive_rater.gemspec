# -*- encoding: utf-8 -*-
require File.expand_path('../lib/rails_responsive_rater/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Scott Walker", "Derek Briggs"]
  gem.email         = ["swalke16@gmail.com", "derek.briggs@me.com"]
  gem.description   = %q{A responsive rating gem for rails.}
  gem.summary       = %q{A responsive rating gem for rails.}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "rails_responsive_rater"
  gem.require_paths = ["lib"]
  gem.version       = RailsResponsiveRater::VERSION
end
