```mermaid
  
  classDiagram
  class Pizza{
    +String name
    +String dough
    +String sauce
    +Array~String~ toppings
    +bake()
    +cut()
    +box()
    +getName() String
  }
  <<abstract>>Pizza
  Pizza <|-- NYStyleCheesePizza
  Pizza <|-- ChicagoStyleCheesePizza
  
  ChicagoStyleCheesePizza : +cut()
  class  PizzaStore{
    +orderPizza(type) Pizza
    #createPizza(type)* Pizza 
  }
<<abstract>> PizzaStore

PizzaStore <|-- NYPizzaStore
NYPizzaStore: #createPizza(type)Pizza
PizzaStore <|-- ChicagoPizzaStore
ChicagoPizzaStore: #createPizza(type)Pizza

ChicagoPizzaStore --> ChicagoStyleCheesePizza
NYPizzaStore --> NYStyleCheesePizza


```
