var ItemsCount=0;
	var k;
	var Items=new Array();

	function AddToList(FoodName,FoodPrice)
	{
		var i;
		var j;
		var number = 1;
		var Find = false;
		for(i=0;i<ItemsCount;i++)
		{
			if (Items[i] == FoodName)
			{
				Find = true;
				alert('This Item is already in your list');
				return;
			}
		}

		Items[ItemsCount] = FoodName;
		Items[ItemsCount+20] = number;
		Items[ItemsCount+40] = FoodPrice;

		for(i=0 ; i <= ItemsCount ; i++)
		{
			if(i == 0 )
			{
				document.getElementById("OrderList").innerHTML = "<table border='1'><tr> <td width='200px' height='20px'>Food Name</td>    <td width='50px' height='20px'>Price</td>           <td width='50px' height='20px'> number </td>         <td width='50px' height='20px'>delete</td> <td width='25px' height='20px'>More</td><td width='25px' height='20px'>Less</td>  </tr></table>";
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";
			}
			else
			{
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";

			}

		}

		ItemsCount++;

		TotalPrice();

	}


	function Increase(Code)
	{
        var j;
		for(j=0;j<=ItemsCount;j++)
		{
			if(Code == j)
			{
				Items[j+40] = Items[j+40]/Items[j+20];
				Items[j+20] = Items[j+20]+1;
				Items[j+40] = Items[j+40]*Items[j+20];
				break;
			}
		}
		var i;
		for(i=0 ; i < ItemsCount ; i++)
		{
			if(i == 0 )
			{
				document.getElementById("OrderList").innerHTML = "<table border='1'><tr> <td width='200px' height='20px'>Food Name</td>    <td width='50px' height='20px'>Price</td>           <td width='50px' height='20px'> number </td>         <td width='50px' height='20px'>delete</td> <td width='25px' height='20px'>More</td><td width='25px' height='20px'>Less</td>  </tr></table>";
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";

			}
			else
			{
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";
			}
		}

		TotalPrice();

    }
	function Decrease(Code)
	{
        var j;
		for(j=0;j<=ItemsCount;j++)
		{
			if(Code == j)
			{
				Items[j+40] = Items[j+40]/Items[j+20];
				Items[j+20] = Items[j+20]-1;

				if(Items[j+20] == 0) Items[j+20] = 1;

				Items[j+40] = Items[j+40]*Items[j+20];
				break;
			}
		}
		var i;
		for(i=0 ; i < ItemsCount ; i++)
		{
			if(i == 0 )
			{
				document.getElementById("OrderList").innerHTML = "<table border='1'><tr> <td width='200px' height='20px'>Food Name</td>    <td width='50px' height='20px'>Price</td>           <td width='50px' height='20px'> number </td>         <td width='50px' height='20px'>delete</td> <td width='25px' height='20px'>More</td><td width='25px' height='20px'>Less</td>  </tr></table>";
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";

			}
			else
			{
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";
			}
		}
		TotalPrice();

    }
	function Delete(Code)
	{
		ItemsCount = ItemsCount-1;
		if(ItemsCount == 0)
		{
			document.getElementById("TotalPrice").innerHTML ="";
			document.getElementById("OrderList").innerHTML = "";
			return;
		}
		var j;
		for(j=0;j<=ItemsCount;j++)
		{
			if(Code == j)
			{
				Items[j] = Items[j+1];
				Items[j+20] = Items[j+20+1];
				Items[j+40] = Items[j+40+1];
			}
		}

		var i;
		for(i=0 ; i < ItemsCount ; i++)
		{
			if(i == 0 )
			{
				document.getElementById("OrderList").innerHTML = "<table border='1'><tr> <td width='200px' height='20px'>Food Name</td>    <td width='50px' height='20px'>Price</td>           <td width='50px' height='20px'> number </td>         <td width='50px' height='20px'>delete</td> <td width='25px' height='20px'>More</td><td width='25px' height='20px'>Less</td>  </tr></table>";
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";

			}
			else
			{
				document.getElementById("OrderList").innerHTML +="<table border='1'><tr> <td width='200px' height='20px'>"+Items[i]+"</td> <td width='50px' height='20px'>"+Items[i+40]+"</td> <td width='50px' height='20px'>"+Items[i+20]+" </td> <td width='50px' height='20px'><input type='button' value='delete'  OnClick='Delete("+i+");'/></td><td width='25px' height='20px'><input type='button' value='+' OnClick='Increase("+i+");' /></td> <td width='25px' height='20px'><input type='button' value='-' OnClick='Decrease("+i+");' /></td> </tr></table>";
			}
		}
		TotalPrice();



	}
	function TotalPrice()
	{

	var i;
	var sum = 0;


	for(i=0;i< ItemsCount;i++)
	{
		sum = parseInt(Items[i+40]) + sum;
		document.getElementById("TotalPrice").innerHTML ="<table border='1'><tr> <td> Toal Price </td><td>"+sum+" </td> </tr></table>";

	}


	}

	/***********************************Validity function***/
	function Delivery()
	{

		//var x = document.getElementById("AddressBox");
		//if(x.value != ' ')
		//{
			window.location = "DeliveryPage.html"
		//}
		//else
		//{
			//alert('The address cannot be null');
		//}
	}
	function PickUp()
	{
		window.location = "PickUpPage.html";
	}
