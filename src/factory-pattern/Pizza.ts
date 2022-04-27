export abstract class Pizza{
	name!: string;
	dough!: string;
	sauce!: string;
	toppings: Array<string> = [];

	prepare(){
		console.log(`preparing ${this.name}`);
		console.log("Tossing dough...");
		console.log("Adding sauce...");
		console.log("Adding topping: ");
		this.toppings.forEach(topping => {
			console.log(topping);
		});
	}

	bake(){
		console.log("Bake for 25 minutes at 350");
	}

	cut(){
		console.log("Cutting the pizza into diagonal slices.");
	}

	box(){
		console.log("Place pizza in official PizzaStore box.");
	}

	public getName():string{
		return this.name;
	}
}