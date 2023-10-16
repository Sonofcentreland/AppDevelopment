package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.CommentRequest;
import com.jeeva.model.Comment;
import com.jeeva.repository.CommentRepository;

@Service
public class CommentService {
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	RecipeService recipeService;
	
	public Comment toComment(CommentRequest request) {
		var comment = Comment.builder()
				.recipe(recipeService.getRecipeById(request.getRecipeId()))
				.user(userService.getUserById(request.getUserId()))
				.text(request.getText())
				.build();
		return comment;
	}
	
	public Comment toComment(long cid,CommentRequest request) {
		Comment comment = getCommentById(cid);
		comment.setText(request.getText());
		return comment;
	}
	
	public boolean isCommentExist(long cid) {
		return commentRepository.existsById(cid);
	}
	
	public Comment createComment(CommentRequest request) {
		return commentRepository.save(toComment(request));
	}
	
	public Comment getCommentById(long cid) {
		return commentRepository.findById(cid).get();
	}
	
	public List<Comment> getAllComments(){
		return commentRepository.findAll();
	}
	
	public List<Comment> getCommentByRecipe(long rid){
		return commentRepository.findByRecipe(recipeService.getRecipeById(rid));
	}
	
	public List<Comment> getCommentByUser(long uid){
		return commentRepository.findByUser(userService.getUserById(uid));
	}
	
	public List<Comment> getAllCommentById(List<Long> commentIds){
		return commentRepository.findAllById(commentIds);
	}
	
	public Comment updateComment(long cid, CommentRequest request) {
		System.out.println(toComment(cid,request).getCid());
		return commentRepository.save(toComment(cid,request));
	}

	public void deleteCommentById(long cid) {
		commentRepository.deleteById(cid);
	}
	
	public long countOfComments() {
		return commentRepository.count();
	}
	
}
