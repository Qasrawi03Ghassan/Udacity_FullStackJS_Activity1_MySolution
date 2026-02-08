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

     setLength(length){
        this.#length = length;
    };
    setWidth(width){
        this.#width = width;
    };
    setHeight(height){
        this.#height = height;
    };

      getLength(){
        return this.#length;
    };
     getWidth(){
        return this.#width;
    };
     getHeight(){
        return this.#height;
    };

     calcVolume() {
        return (this.#length * this.#height * this.#width);
     };
};