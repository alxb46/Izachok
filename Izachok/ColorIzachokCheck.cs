namespace Izachok
{
	static public class ColorIzachokCheck
	{
    
        static public int MinMeetingsToReachColor(int[] hedgehogs, int desiredColor)
        {
            //if choise color incorrect
            if(desiredColor> 3 || desiredColor < 1){
                return -1;
            }

            int red = hedgehogs[0];
            int green = hedgehogs[1];
            int blue = hedgehogs[2];

            // If all hedgehogs  already one color
            if ((red == 0 && green == 0) || (red == 0 && blue == 0) || (green == 0 && blue == 0))
            {
                return -1;
            }

            //Calculete count hedgehogs, which is not the desired color
            int otherColor1 =0, otherColor2 = 0;

            switch (desiredColor)
            {
                case 0:
                    otherColor1 = green;
                    otherColor2 = blue;
                break;
                case 1:
                    otherColor1 = red;
                    otherColor2 = blue;
                    break;
                case 2:
                    otherColor1 = red;
                    otherColor2 = green;
                    break;
                default:
                    break;
            }

            // If one of the colors is 0, we simply take the amount of the other color
            if (otherColor1 == 0) return otherColor2;
            if (otherColor2 == 0) return otherColor1;

            // Min count meeting
            int meetings = Math.Min(otherColor1, otherColor2);
            int remaining = Math.Abs(otherColor1 - otherColor2);

            // If hedgehogs remain
            if (remaining > 0)
            {
                meetings += (remaining + 1) / 2; // 1 meeting -> 2 hedgehogs
            }

            return meetings;
        }
    
    }
}

