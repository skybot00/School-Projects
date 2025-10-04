/**
 * @Author: Skyler May
 * @Date:   2024-10-01 14:07:04
 * @Last Modified by:   Skyler May
 * @Last Modified time: 2024-10-03 15:18:04
 */


 /**
 * LexicalAnalyzer
 */

import java.util.ArrayList;
import java.util.List;


public class LexicalAnalyzer{
    
    enum TokenType{
        Keyword, Identifier, Constant, Operator, EqSign, LessThan, LeftParen, RightParen, OpenBrace, CloseBrace, SemiColon, EOF, Invalid
    }

    static class Token{
        TokenType type;
        String Lexeme;

        public Token(TokenType type, String Lexeme){
            this.type = type;
            this.Lexeme = Lexeme;
        }

        public String toString(){
            return "Token Type" + type + ", Lexeme: " + Lexeme;
        }
    }

    private final String input;
    private final List<Token> tokens = new ArrayList<>();
    private int index = 0;

    public LexicalAnalyzer(String input){
        this.input = input;
    }
    public List<Token> analyze(){
        while(index < input.length()){
            char currentChar = input.charAt(index);


            if( Character.isWhitespace(currentChar)){
                index++;
                continue;
            }

            if(Character.isLetter(currentChar)){
                StringBuilder lexeme = new StringBuilder();
                while (index < input.length() && (Character.isLetterOrDigit(input.charAt(index)))){
                    lexeme.append(input.charAt(index));
                    index++;
                }
                String lexemeStr = lexeme.toString();
                if(lexemeStr.equals("int") || lexemeStr.equals("for")){
                    tokens.add(new Token(TokenType.Keyword, lexemeStr));

                } else{
                   tokens.add(new Token(TokenType.Identifier, lexemeStr));
             
               }
            } else if (Character.isDigit(currentChar)){
                StringBuilder lexeme = new StringBuilder();
                while (index < input.length() && Character.isDigit(input.charAt(index))){
                    lexeme.append(input.charAt(index));
                    index++;
                }
                tokens.add(new Token(TokenType.Constant, lexeme.toString()));
            } else{
                switch (currentChar) {
                    case '(':
                        tokens.add(new Token(TokenType.LeftParen, "("));
                        break;
                    case ')':
                        tokens.add(new Token(TokenType.RightParen, ")"));
                        break;
                    case '{':
                        tokens.add(new Token(TokenType.OpenBrace, "{"));
                        break;
                    case '}':
                        tokens.add(new Token(TokenType.CloseBrace, "}"));
                        break;
                    case ';':
                        tokens.add(new Token(TokenType.SemiColon, ";"));
                        break;
                    case '=':
                    	tokens.add(new Token(TokenType.EqSign, "="));
                    	break;
                    case '<':
                    	tokens.add(new Token(TokenType.LessThan, "<"));
                    	break;
                    case '+':
                        String lexeme = Character.toString(currentChar);
                        if(currentChar == '+' && index + 1 < input.length() && input.charAt(index + 1) == '+'){
                            lexeme += input.charAt(++index);
                        }
                        tokens.add(new Token(TokenType.Operator, lexeme));
                        break;
                    default:
                        tokens.add(new Token(TokenType.Invalid, Character.toString(currentChar)));
                        break;
                }
                    index++;
            }
        }
        tokens.add(new Token(TokenType.EOF, "EOF"));
        return tokens;
    }
}