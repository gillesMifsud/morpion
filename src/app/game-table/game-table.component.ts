import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})

export class GameTableComponent implements OnInit {

  s1 = "";
  s2 = "";
  s3 = "";
  s4 = "";
  s5 = "";
  s6 = "";
  s7 = "";
  s8 = "";
  s9 = "";

  message: string;
  turn: string;
  winner: string = null;

  constructor() { }

  ngOnInit() {
    this.randomStarter();
  }

  randomStarter()
  {
    if(Math.random()<0.5)
    {
      this.turn = "O";
    }
    else
    {
      this.turn = "X";
    }
    this.setMessage(this.turn + " Starts")
  }

  // Sets message
  setMessage(msg)
  {
  this.message = msg;
  }

  // Plays next move
  nextMove(s, caseName)
  {
    // Checks if already win
    if(this.winner != null)
    {
      this.setMessage(this.winner + " already won")
    }
    // If case is empty, fill with this.turn
    else if(s == "")
    {
      s = this.turn;
      this.fillCase(caseName);
      this.switchTurn();
    }
    else
    {
      this.setMessage("This square is already taken")
    }
  }

  // Fills the case with the current player letter value
  fillCase(caseName)
  {
    if(caseName == "s1"){
      this.s1 = this.turn;
    }
    if(caseName == "s2"){
      this.s2 = this.turn;
    }
    if(caseName == "s3"){
      this.s3 = this.turn;
    }
    if(caseName == "s4"){
      this.s4 = this.turn;
    }
    if(caseName == "s5"){
      this.s5 = this.turn;
    }
    if(caseName == "s6"){
      this.s6 = this.turn;
    }
    if(caseName == "s7"){
      this.s7 = this.turn;
    }
    if(caseName == "s8"){
      this.s8 = this.turn;
    }
    if(caseName == "s9"){
      this.s9 = this.turn;
    }
  }

  // Switch turns
  switchTurn()
  {
    if(this.checkForWinner(this.turn))
    {
      this.setMessage("Congratulations, " + this.turn + " wins!");
      // Sets the null value in document.winner to document.turn (X or O)
      this.winner = this.turn;
    }
    else if(this.turn == "X")
    {
      this.turn = "O";
      this.setMessage("It's " + this.turn + " to play")
    }
    else
    {
      this.turn = "X";
      this.setMessage("It's " + this.turn + " to play")
    }
  }

  // Checks for a winner
  checkForWinner(move)
  {
    if(
      this.checkRow(1, 2, 3, move) ||
      this.checkRow(4, 5, 6, move) ||
      this.checkRow(7, 8, 9, move) ||
      this.checkRow(1, 4, 7, move) ||
      this.checkRow(2, 5, 8, move) ||
      this.checkRow(3, 6, 9, move) ||
      this.checkRow(1, 5, 9, move) ||
      this.checkRow(3, 5, 7, move)
    )
    {
      return true;
    }
  }

  // Checks if the row is filled with the same values, returns result (bool)
  checkRow(a, b, c, move)
  {
    if(this.getBox(a) == move && this.getBox(b) == move && this.getBox(c) == move)
    {
      return true;
    }
  }

  // Returns box number (from its #id)
  getBox(number)
  {
    return document.getElementById("s" + number).innerText;
  }

}
