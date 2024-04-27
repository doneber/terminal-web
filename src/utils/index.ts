/**
 * Calcula la distancia de Levenshtein entre dos cadenas.
 * La distancia de Levenshtein es una medida de la diferencia entre dos cadenas de caracteres.
 * Representa el número mínimo de ediciones necesarias para transformar una cadena en la otra,
 * donde las ediciones pueden ser inserciones, eliminaciones o sustituciones de un solo carácter.
 * 
 * @param {string} str1 - La primera cadena.
 * @param {string} str2 - La segunda cadena.
 * @returns {number} La distancia de Levenshtein entre las dos cadenas.
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = []

  // Inicializar la matriz
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  // Calcular la distancia de Levenshtein
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      const substitutionCost = str2[i - 1] === str1[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j - 1] + substitutionCost,
        matrix[i][j - 1] + 1,     // Inserción
        matrix[i - 1][j] + 1      // Eliminación
      );
    }
  }

  return matrix[str2.length][str1.length];
}
