export class Car{

    #length = 0;
    #width = 0;
    #height = 0;

    weight = 0;

     constructor(length,width,height, weight){
        this.#length = length;
        this.#width = width;
        this.#height = height;

        this.weight = weight;
     };

     set length(length){
        this.#length = length;
    };
    set width(width){
        this.#width = width;
    };
    set height(height){
        this.#height = height;
    };

      get length(){
        return this.#length;
    };
     get width(){
        return this.#width;
    };
     get height(){
        return this.#height;
    };

     calcVolume() {
        return (this.#length * this.#height * this.#width);
     };
};