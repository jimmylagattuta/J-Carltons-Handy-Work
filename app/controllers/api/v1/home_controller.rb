class Api::V1::HomeController < ApplicationController
	def hello
		puts "*" * 10
		puts "hello"
		puts "*" * 10
		render json: "Hello"
	end
end
