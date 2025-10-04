/**
 * @Author: Skyler May
 * @Date:   2024-10-01 10:21:46
 * @Last Modified by:   Skyler May
 * @Last Modified time: 2024-10-01 14:05:31
 */

/**
 * Token
 */

public class Token {

    enum TokenType{
        Keyword, Identifier, Constant, eq_sign, less_than_sign, operator, open_paren, close_paren,
        open_brace, close_brace, semicolon, invalid
    
    }
    private TokenType type;
    private String lexeme;

    //constructor
    public Token(TokenType type, String lexeme){
        this.type = type;
        this.lexeme = lexeme;
    }

    // getter functions
    public TokenType getType(){
        return type;
    }
    public String getLexeme(){
        return lexeme;
    }

    //function
    public void display(){
        System.out.println("Token Type: " + getTokenTypename() + ", Lexeme: " + lexeme);
    }

    private String getTokenTypename(){
        switch(type){
            case Keyword: return "KeyWord";
            case Identifier: return "Identifier";
            case Constant: return "Constant";
            case eq_sign: return "Equal Sign";
            case less_than_sign: return "Less Than Sign";
            case operator: return "Operator";
            case open_paren: return "Open Parenthese";
            case close_paren: return "Close Parenthese";
            case open_brace: return "Open Brace";
            case close_brace:return "Close Brace";
            case semicolon:return "Semicolon";
            case invalid: return "Invalid";
            default: return "unknown";
        }
    }
}








