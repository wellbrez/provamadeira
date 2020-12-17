function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  if (str=="+"||str=="-"||str=="e"||str=="."||str==",") return true
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

// Returns the inverse of matrix `M`.
function inverter_matriz(M){
    // I use Guassian Elimination to calculate the inverse:
    // (1) 'augment' the matrix (left) by the identity (on the right)
    // (2) Turn the matrix on the left into the identity by elemetry row ops
    // (3) The matrix on the right is the inverse (was the identity matrix)
    // There are 3 elemtary row ops: (I combine b and c in my code)
    // (a) Swap 2 rows
    // (b) Multiply a row by a scalar
    // (c) Add 2 rows
    
    //if the matrix isn't square: exit (error)
    if(M.length !== M[0].length){return;}
    
    //create the identity matrix (I), and a copy (C) of the original
    var i=0, ii=0, j=0, dim=M.length, e=0, t=0;
    var I = [], C = [];
    for(i=0; i<dim; i+=1){
        // Create the row
        I[I.length]=[];
        C[C.length]=[];
        for(j=0; j<dim; j+=1){
            
            //if we're on the diagonal, put a 1 (for identity)
            if(i==j){ I[i][j] = 1; }
            else{ I[i][j] = 0; }
            
            // Also, make the copy of the original
            C[i][j] = M[i][j];
        }
    }
    
    // Perform elementary row operations
    for(i=0; i<dim; i+=1){
        // get the element e on the diagonal
        e = C[i][i];
        
        // if we have a 0 on the diagonal (we'll need to swap with a lower row)
        if(e==0){
            //look through every row below the i'th row
            for(ii=i+1; ii<dim; ii+=1){
                //if the ii'th row has a non-0 in the i'th col
                if(C[ii][i] != 0){
                    //it would make the diagonal have a non-0 so swap it
                    for(j=0; j<dim; j++){
                        e = C[i][j];       //temp store i'th row
                        C[i][j] = C[ii][j];//replace i'th row by ii'th
                        C[ii][j] = e;      //repace ii'th by temp
                        e = I[i][j];       //temp store i'th row
                        I[i][j] = I[ii][j];//replace i'th row by ii'th
                        I[ii][j] = e;      //repace ii'th by temp
                    }
                    //don't bother checking other rows since we've swapped
                    break;
                }
            }
            //get the new diagonal
            e = C[i][i];
            //if it's still 0, not invertable (error)
            if(e==0){return}
        }
        
        // Scale this row down by e (so we have a 1 on the diagonal)
        for(j=0; j<dim; j++){
            C[i][j] = C[i][j]/e; //apply to original matrix
            I[i][j] = I[i][j]/e; //apply to identity
        }
        
        // Subtract this row (scaled appropriately for each row) from ALL of
        // the other rows so that there will be 0's in this column in the
        // rows above and below this one
        for(ii=0; ii<dim; ii++){
            // Only apply to other rows (we want a 1 on the diagonal)
            if(ii==i){continue;}
            
            // We want to change this element to 0
            e = C[ii][i];
            
            // Subtract (the row above(or below) scaled by e) from (the
            // current row) but start at the i'th column and assume all the
            // stuff left of diagonal is 0 (which it should be if we made this
            // algorithm correctly)
            for(j=0; j<dim; j++){
                C[ii][j] -= e*C[i][j]; //apply to original matrix
                I[ii][j] -= e*I[i][j]; //apply to identity
            }
        }
    }
    
    //we've done all operations, C should be the identity
    //matrix I should be the inverse:
    return I;
}
//Funcao refeita por Wellington Bravin
function multiplicar_matriz(A,B) {
	var Aisvector=false;
	var Bisvector=false;
	var Alinhas = A.length;
	var Acolunas = A[0].length;
	var Blinhas = B.length;
	var Bcolunas = B[0].length;
	if(Acolunas==undefined)
	{
		Acolunas=1;
		Aisvector = true;
	}
	if(Bcolunas==undefined)
	{
		Bcolunas=1;
		Bisvector=true;
	}

	var Matriz_temporaria = [];

	if(Acolunas!=Blinhas)
	{
		return null;
	}

	for(let linhas=0; linhas<Alinhas;linhas++)
	{
		Matriz_temporaria.push(new Array(Bcolunas))
		for(let b=0;b<Bcolunas;b++)
		{
			Matriz_temporaria[linhas][b]=0;
		}
	}
	if(!Aisvector && !Bisvector){
		for(let linhas=0; linhas<Alinhas;linhas++)
		{
			for(let colunas=0; colunas<Bcolunas;colunas++)
			{
				let soma = 0.00;
				for(let intersecao=0;intersecao<Acolunas;intersecao++)
				{
					soma+=A[linhas][intersecao]*B[intersecao][colunas]
				}
				Matriz_temporaria[linhas][colunas] = soma;
				
			}
		}
	}
	else if(Bisvector)
	{
		for(let linhas=0; linhas<Alinhas;linhas++)
		{
			for(let colunas=0; colunas<Bcolunas;colunas++)
			{
				let soma = 0.00;
				for(let intersecao=0;intersecao<Acolunas;intersecao++)
				{
					soma+=A[linhas][intersecao]*B[intersecao]
				}
				Matriz_temporaria[linhas][colunas] = soma;
				
			}
		}
	}
	else
	{
		for(let linhas=0; linhas<Alinhas;linhas++)
		{
			for(let colunas=0; colunas<Bcolunas;colunas++)
			{
				let soma = 0.00;
				for(let intersecao=0;intersecao<Acolunas;intersecao++)
				{
					soma+=A[linhas]*B[intersecao][colunas]
				}
				Matriz_temporaria[linhas][colunas] = soma;
				
			}
		}
	}
	return Matriz_temporaria;
}

function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  var divrelatorio = document.getElementById("divrelatorio");
  var divtable = document.createElement('div')
  divtable.classList.add("table")

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      if(cellData!=0 && cellData!= Infinity)
      {cell.appendChild(document.createTextNode(cellData.toExponential(4)));}
      else
        {cell.appendChild(document.createTextNode(cellData));}
      
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  divtable.appendChild(table)
  divrelatorio.appendChild(divtable)
}
function createVector(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  var divrelatorio = document.getElementById("divrelatorio");

  for (i=0;i<tableData.length;i++)
  {
    var row = document.createElement('tr')
    var cell = document.createElement('td');
    var cell2 = document.createElement('td');
    cell2.appendChild(document.createTextNode(i));
    if(tableData[i][0]==undefined)
    {
        cell.appendChild(document.createTextNode(tableData[i].toExponential(4)));
    }
    else
    {
        cell.appendChild(document.createTextNode(tableData[i][0].toExponential(4)));
    }
    row.appendChild(cell2);
    row.appendChild(cell);
    tableBody.appendChild(row);
  }

    table.appendChild(tableBody);
    divrelatorio.appendChild(table)
}
function createLabel(texto)
{

  var divrelatorio = document.getElementById("divrelatorio");
  var h2temp = document.createElement("h2")
  h2temp.appendChild(document.createTextNode(texto))
  divrelatorio.appendChild(h2temp)

}