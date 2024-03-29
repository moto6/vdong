serve_grid:
	node mockserver/mock1.js grid_db.json

serve_support:
	node mockserver/mock1.js support_db.json


mock:
	node mockserver/mock2.js db.json
