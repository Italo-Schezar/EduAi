import asyncio
import os
from dotenv import load_dotenv
from src.services.ai.llm_client import LLMClient, ChatMessage

# Load environment variables
load_dotenv()

async def test_openrouter_api():
    """Test the OpenRouter API integration."""
    api_key = os.getenv("OPENROUTER_API_KEY")
    
    if not api_key:
        print("Error: OPENROUTER_API_KEY environment variable not set.")
        print("Please create a .env file with your OpenRouter API key.")
        return
    
    try:
        # Initialize the LLM client
        client = LLMClient(api_key=api_key)
        
        # Create test messages
        messages = [
            ChatMessage(role="system", content="You are a helpful AI assistant for an educational platform."),
            ChatMessage(role="user", content="What are the best ways to study effectively?")
        ]
        
        # Generate a response
        print("Sending request to OpenRouter API...")
        response = await client.generate_chat_completion(messages=messages)
        
        # Print the response
        print("\nResponse from OpenRouter API:")
        print(f"Model: {response.get('model', 'Unknown')}")
        
        content = response.get("choices", [{}])[0].get("message", {}).get("content", "")
        print(f"\nContent: {content}")
        
        # Print token usage
        usage = response.get("usage", {})
        if usage:
            print("\nToken Usage:")
            print(f"Prompt tokens: {usage.get('prompt_tokens', 'N/A')}")
            print(f"Completion tokens: {usage.get('completion_tokens', 'N/A')}")
            print(f"Total tokens: {usage.get('total_tokens', 'N/A')}")
        
        print("\nTest completed successfully!")
        
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    asyncio.run(test_openrouter_api())
