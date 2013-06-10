interactor :off

group :frontend do
	guard 'coffeescript',
		:input  => 'assets/compile/coffee/*',
		:output => 'assets/js/',
		:hide_success => true

	guard 'livereload' do
	  watch(%r{assets/.+\.(css|js|html)})
	end

	guard 'compass' do
	  watch(%r{assets/compile/.+\.(scss|img)})
	end
end
