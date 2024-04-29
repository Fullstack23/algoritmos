// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".

//Exemplo 1
// const listas = ["Sofia", "Lucas", "Isabella", "Mateus","Raul"];
// listas[4] = "Alice";
// listas.forEach((item, index) => {
//     console.log(`${index}: ${item}`);
//     listas.reverse();
// });

//Exemplo 2
// const listas = ["Sofia", "Lucas", "Isabella", "Mateus"];
// listas[4] = "Alice";
// listas.reverse();
// listas.forEach((item, index) => {
//     if (index === 0 || index === 1 || index === 2 || index ===3 || index ===4) {
//         console.log(`${index}: ${item}`);
//     }
// });

//Exemplo 3
// const listas = ["Sofia", "Lucas", "Isabella", "Mateus", "Alice"];
// listas.reverse();
// for (let i = 0; i < listas.length; i++) {
//     console.table(listas)
//     console.log(`Lista ${i + i}: ${listas[i]}`);
// }

const listas = ["Sofia", "Lucas", "Isabella", "Mateus", "Alice"];
for (let i = 0; i < listas.length; i++) {
    console.log(i + 1 + ":" + listas[i]);
}