function UrlManipulator(url) {
	var self = this;

	self.urlOriginal = url;
	self.url = url;
	self.parameters = {};
}

UrlManipulator.prototype.removeProtocol = function(url) {
	return url.replace(/^https?:\/\//, '');
};

UrlManipulator.prototype.addParameter = function(key, value) {
	var self = this;
	self.parameters[key] = value;
};

UrlManipulator.prototype.addParameters = function(parameters) {
	var self = this;

	for(key in parameters) {
		self.parameters[key] = parameters[key];
	}
};

UrlManipulator.prototype.removeAllParameters = function() {
	var self = this;
	self.parameters = {};
};

UrlManipulator.prototype.removeParameter = function(key) {
	var self = this;
	delete self.parameters[key];
};

UrlManipulator.prototype.parameterFormated = function() {
	var self = this;
	var parameters = self.parameters;
	var parametersArray = [];
	for(var key in parameters) {
		var parameterString = "";
		var param = parameters[key];
		parameterString += key;
		parameterString += "=";
		parameterString += param;

		parametersArray.push(parameterString);
	}

	return encodeURI(parametersArray.join('&'));
};

UrlManipulator.prototype.urlFormated = function() {
	var self = this;
	var parameters = self.parameterFormated();
	var url = self.url;

	return url + "?" + parameters;
};