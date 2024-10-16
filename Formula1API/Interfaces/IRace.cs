namespace Formula1API.Interfaces;

public interface IRace
{
    
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public int WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
    public int NumberOfLaps {get;set;}
}