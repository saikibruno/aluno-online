class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        var conta = Math.max(
            0.4 * this.a1 + 0.6 * this.a2,
            0.4 * this.a1 + 0.6 * this.a3,
            0.4 * this.a3 + 0.6 * this.a2
        );
        return parseFloat(conta.toFixed(2))
    }

    mediaCA() {
        if (this.mediaFinal() >= 9 && this.mediaFinal() <= 10) {
            return "SS"
        } else if (this.mediaFinal() >= 7 && this.mediaFinal() <= 8.99) {
            return "MS"
        } else if (this.mediaFinal() >= 5 && this.mediaFinal() <= 6.99) {
            return "MM"
        } else if (this.mediaFinal() >= 3 && this.mediaFinal() <= 4.99) {
            return "MI"
        } else if(this.mediaFinal() >= 0.1 && this.mediaFinal() <= 2.99){
            return "II"
        } else if(this.mediaFinal() == 0 ){
            return "SR"
        } else{
            return "Invalidado."
        }
    }
}    
    
module.exports = Nota;
