.box{
min-width:300px;
max-width:20%;
display: inline-block;
margin:10px;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24);
}

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 1px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 15px;
  transition: 0.2s;
}
.accordion img{
  width: 100%;
}
.active{
  background-color: #ccc;
  -webkit-transition: all 0.2s;
}

.shadow {
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24);
  -webkit-transition: all 0.2s;
}
.panel {
  padding: 0 5px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.conext{
  width: 100%;
  margin: 10px;
}
.gonext{
  max-width: 20%;
  text-align:center;
  padding: 8px;
  background-color: #f2f3f6;
  border-left: 2px solid #fff;
}
.whnext{
  display:inline-block;
  width: 80%;
  background-color: #f2f3f6;
  padding: 5px;
}
