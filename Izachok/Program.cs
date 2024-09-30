
using Izachok;


int[] hedgehogs = { 8, 1, 9 }; // [red, green, blue]
int desiredColor = 2; // 0 - red, 1 - green, 2 - blue

int result = ColorIzachokCheck.MinMeetingsToReachColor(hedgehogs, desiredColor);
Console.WriteLine($"Min count meetings {result}");

