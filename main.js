var rotation = 0;
		var five = true;
		var list = [];
		var enabled = true;

		function spin()
		{
			if(enabled)
			{
				enabled = false;
				var weighted = [];
				for(var i=0;i<list.length;i++)
				{
					for(var j=0;j<list[i].Quantity;j++)
					{
						weighted.push({Id:list[i].Id,Angle:list[i].Angle})
					}
				}
				if(weighted.length == 0)
				{
					alert("No Stock");
					return;
				}
				var r = Math.floor(Math.random() * weighted.length); 
				rotate(weighted[r].Angle);
				for(var i=0;i<list.length;i++)
				{
					if(list[i].Id==weighted[r].Id)
					{
						list[i].Quantity--;
						if(five)
						{
							setCookie("items5", JSON.stringify(list));
						}
						else
						{
							setCookie("items10", JSON.stringify(list));
						}
						break;
					}
				}
			}

		}

		function rotate(degrees,numberOfRotations=5)
		{
			var offset = (numberOfRotations*360);
			degrees = degrees + offset;
			rotation = degrees;

			$("#rot").css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
				'-moz-transform' : 'rotate('+ degrees +'deg)',
				'-ms-transform' : 'rotate('+ degrees +'deg)',
				'transform' : 'rotate('+ degrees +'deg)'});

			setTimeout(function(){ resetRotation(); }, 4000);
		}

		function resetRotation()
		{
			rotation = rotation % 360;
			$("#rot").removeClass("animated");
			$("#rot").css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
				'-moz-transform' : 'rotate('+ rotation +'deg)',
				'-ms-transform' : 'rotate('+ rotation +'deg)',
				'transform' : 'rotate('+ rotation +'deg)'});

			setTimeout(function(){ $("#rot").addClass("animated"); }, 100);
			enabled = true;
		}
		function hideThenShow(hide,show)
		{
			$( hide ).fadeOut( "fast", function() {
				$( show ).fadeIn("fast");
			});
		}
		function selectApp()
		{
			if($('input[name="conf"]:checked').val() == "five")
			{
				five = true;
				var cookie = getCookie("items5");
				if(cookie == "")
				{
					list = [{Id:1,Angle:0,Quantity:1},
					{Id:2,Angle:72,Quantity:1},
					{Id:3,Angle:144,Quantity:1},
					{Id:4,Angle:216,Quantity:1},
					{Id:5,Angle:288,Quantity:1}];
				}
				else
				{
					list = JSON.parse(cookie);
					for(var i=0;i<list.length;i++)
					{
						if(list[i].Quantity == 0)
						{
							$('#Item_'+(i+1)).removeAttr("checked");
						}
					}
				}
				$("#rot").attr("src","full5.png");
				hideThenShow('#AppOptions','#FiveOptions');
			}
			else
			{
				five = false;
				var cookie = getCookie("items10");
				if(cookie == "")
				{
					list = [{Id:1,Angle:0,Quantity:1},
					{Id:2,Angle:36,Quantity:1},
					{Id:3,Angle:72,Quantity:1},
					{Id:4,Angle:108,Quantity:1},
					{Id:5,Angle:144,Quantity:1},
					{Id:6,Angle:180,Quantity:1},
					{Id:7,Angle:216,Quantity:1},
					{Id:8,Angle:252,Quantity:1},
					{Id:9,Angle:288,Quantity:1},
					{Id:10,Angle:324,Quantity:1}];
				}
				else
				{
					list = JSON.parse(cookie);
					for(var i=0;i<list.length;i++)
					{
						if(list[i].Quantity == 0)
						{
							$('#Item'+(i+1)).removeAttr("checked");
						}
					}
				}
				$("#rot").attr("src","full10.png");
				hideThenShow('#AppOptions','#TenOptions');

			}
		}
		function selectOptions()
		{
			if(five)
			{

				if($('#Item_1').is(":checked"))
				{
					list[0].Quantity = 1;
				}
				else
				{
					list[0].Quantity = 0;
				}

				if($('#Item_2').is(":checked"))
				{
					list[1].Quantity = 1;
				}
				else
				{
					list[1].Quantity = 0;
				}

				if($('#Item_3').is(":checked"))
				{
					list[2].Quantity = 1;
				}
				else
				{
					list[2].Quantity = 0;
				}

				if($('#Item_4').is(":checked"))
				{
					list[3].Quantity = 1;
				}
				else
				{
					list[3].Quantity = 0;
				}

				if($('#Item_5').is(":checked"))
				{
					list[4].Quantity = 1;
				}
				else
				{
					list[4].Quantity = 0;
				}

				setCookie("items5", JSON.stringify(list));
				hideThenShow("#FiveOptions","#Wheel");
			}
			else
			{
				if($('#Item1').is(":checked"))
				{
					list[0].Quantity = 1;
				}
				else
				{
					list[0].Quantity = 0;
				}

				if($('#Item2').is(":checked"))
				{
					list[1].Quantity = 1;
				}
				else
				{
					list[1].Quantity = 0;
				}

				if($('#Item3').is(":checked"))
				{
					list[2].Quantity = 1;
				}
				else
				{
					list[2].Quantity = 0;
				}

				if($('#Item4').is(":checked"))
				{
					list[3].Quantity = 1;
				}
				else
				{
					list[3].Quantity = 0;
				}

				if($('#Item5').is(":checked"))
				{
					list[4].Quantity = 1;
				}
				else
				{
					list[4].Quantity = 0;
				}

				if($('#Item6').is(":checked"))
				{
					list[5].Quantity = 1;
				}
				else
				{
					list[5].Quantity = 0;
				}

				if($('#Item7').is(":checked"))
				{
					list[6].Quantity = 1;
				}
				else
				{
					list[6].Quantity = 0;
				}

				if($('#Item8').is(":checked"))
				{
					list[7].Quantity = 1;
				}
				else
				{
					list[7].Quantity = 0;
				}

				if($('#Item9').is(":checked"))
				{
					list[8].Quantity = 1;
				}
				else
				{
					list[8].Quantity = 0;
				}

				if($('#Item10').is(":checked"))
				{
					list[9].Quantity = 1;
				}
				else
				{
					list[9].Quantity = 0;
				}

				setCookie("items10", JSON.stringify(list));
				hideThenShow("#TenOptions","#Wheel");
			}


		}

		function setCookie(cname, cvalue) {
			var d = new Date();
			d.setTime(d.getTime() + (360 * 24 * 60 * 60 * 1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}