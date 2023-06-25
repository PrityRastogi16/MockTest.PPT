 

  class Assignment3
      {
        public static String func(String str)
        {
            if ((str==null)||(str.length() <= 1))
               return str;
    
            else
            {  
                String r = func(str.substring(1,str.length()));
                return r + str.charAt(0) ;
            }
        }
         
        public static void main(String[] args)
        {
            String str = "AeI123";
           
            System.out.print( func(str) );
        }
    }	