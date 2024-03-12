class Ebac {
	constructor (nome, curso) {
        this.nome = nome;
        this.curso = curso;        
    }

    cursosOnline() {
        console.log("Cursos Online");
    }
}

    class Professor extends Ebac {
        constructor (nome, curso, materia) {
            super (nome, curso);
            this.materia = materia;        
    }
    
    ensinaCurso() {
        console.log ("Ensina cursos online");
    }
    
    cursosOnline() {
        console.log("Ensinando cursos online")
    }
}

class Aluno extends Ebac {
    constructor (nome, curso, nivel) {
        super (nome, curso);
        this.nivel = nivel;
    }

    aprendeCurso() {
        console.log("Aprende cursos online");
    }

    cursosOnline() {
        console.log("Aprendendo cursos online");
    }
}

const professor1 = new Professor("Gian", "Full Stack Python", "Front-End");
const professor2 = new Professor("Francisco", "Introdução a Programação", "Indrodução");
const aluno1 = new Aluno("Rachel", "Full Stack Python", "Iniciante");

console.log (professor1);
console.log (professor2);
professor1.ensinaCurso();
professor1.cursosOnline();
console.log (aluno1);
aluno1.aprendeCurso();
aluno1.cursosOnline();






