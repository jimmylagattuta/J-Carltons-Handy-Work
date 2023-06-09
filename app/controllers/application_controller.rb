class ApplicationController < ActionController::Base
	include ActionController::Cookies
	before_action :authenticate_user, :cors_preflight_check
	before_action :set_cors_headers
	rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
	rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
	# after_filter :cors_set_access_control_headers
	def cors_set_access_control_headers
	  headers['Access-Control-Allow-Origin'] = '*'
	  headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
	  headers['Access-Control-Allow-Headers'] = '*'
	  headers['Access-Control-Max-Age'] = "1728000"
	end

	# If this is a preflight OPTIONS request, then short-circuit the
	# request, return only the necessary headers and return an empty
	# text/plain.

	def cors_preflight_check
	  if request.method == :options
	    headers['Access-Control-Allow-Origin'] = '*'
	    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
	    headers['Access-Control-Allow-Headers'] = '*'
	    headers['Access-Control-Max-Age'] = '1728000'
	    render :text => '', :content_type => 'text/plain'
	  end
	end
	private
	def set_cors_headers
			response.set_header "Access-Control-Allow-Origin", origin
	end

	def origin
			request.headers["Origin"] || "*"
	end
	def current_user
		# @current_user = User.find_by_id(session[:user_id])
	end

	def record_not_found(errors)
		# render json: errors.message, status: :not_found
	end

	def invalid_record(invalid)
		# render json: invalid.record.errors, status: :unprocessable_entity
	end

	def authenticate_user
		# puts "*" * 100
		# puts "authenticate_user debugging"
		# puts "current_user"
		# puts current_user
		# puts "current_user.inspect"
		# puts current_user.inspect
		# puts "*" * 100
		# render json: "Not authorized", status: :unauthorized unless current_user
	end
end
