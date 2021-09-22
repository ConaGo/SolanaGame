extends Node


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	#var console = JavaScript.get_interface("console")
	# Call the `window.console.log()` method.
	#var window = JavaScript.get_interface("window")
	var s = JavaScript.eval("""
		console.log("www")
		window.addEventListener('build', () => console.log('build'))
		window.addEventListener('fear', () => console.log('build'))
		const event = new Event('build')
		window.dispatchEvent(event)
	""")
	#window.dispatchEvent("fear")
	#console.log("test")
