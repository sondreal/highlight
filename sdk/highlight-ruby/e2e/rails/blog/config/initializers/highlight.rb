require "highlight"

Highlight::H.new("1jdkoe52", "http://localhost:4318") do |c|
    c.service_name = "my-rails-app"
    c.service_verion = "1.0.0"
end
Rails.logger = Highlight::Logger.new(STDOUT)
